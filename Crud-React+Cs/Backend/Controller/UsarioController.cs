using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Services;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("criar")]
        public async Task<IActionResult> CriarUsuario([FromBody] Usuario usuario)
        {
            var existente = await _usuarioService.BuscarPorEmail(usuario.Email);
            if (existente != null)
                return Conflict(new { mensagem = "Email já cadastrado!" });

            await _usuarioService.CriarUsuario(usuario);
            return Ok(new { mensagem = "Usuário criado com sucesso!" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest login)
        {
            var usuario = await _usuarioService.BuscarPorEmail(login.Email);

            if (usuario == null || usuario.Senha != login.Senha)
                return Unauthorized(new { mensagem = "Email ou senha inválidos." });

            return Ok(new
            {
                mensagem = "Login realizado com sucesso.",
                usuario = new { usuario.Id, usuario.Nome, usuario.Email }
            });
        }

        public class LoginRequest
        {
            public string Email { get; set; }
            public string Senha { get; set; }
        }
    }
}
