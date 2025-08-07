[HttpPost("criar")]
public async Task<IActionResult> Criar([FromBody] Usuario usuario)
{
    await _mongo.CreateUsuarioAsync(usuario);
    return Ok(new { message = "Usuário criado com sucesso!" });
}
