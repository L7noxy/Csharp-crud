using LoginMongoAPI.Models;
using LoginMongoAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace LoginMongoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public AuthController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Usuario login)
        {
            var usuario = _usuarioService.ValidarLogin(login.Email, login.Senha);
            if (usuario == null)
            {
                return Unauthorized("❌ Email ou senha inválidos");
            }

            return Ok("✅ Login bem-sucedido!");
        }

        [HttpPost("registrar")]
        public IActionResult Registrar([FromBody] Usuario novoUsuario)
        {
            _usuarioService.CriarUsuario(novoUsuario);
            return Ok("✅ Usuário registrado com sucesso");
        }
    }
}
