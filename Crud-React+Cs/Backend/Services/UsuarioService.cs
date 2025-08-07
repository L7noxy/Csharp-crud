using MongoDB.Driver;
using Backend.Models;
using Microsoft.Extensions.Configuration;

namespace Backend.Services
{
    public class UsuarioService
    {
        private readonly IMongoCollection<Usuario> _usuarios;

        public UsuarioService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("MongoDb"));
            var database = client.GetDatabase("SeuNomeDeBanco");
            _usuarios = database.GetCollection<Usuario>("usuarios");
        }

        public async Task<List<Usuario>> BuscarTodos() =>
            await _usuarios.Find(usuario => true).ToListAsync();

        public async Task<Usuario> BuscarPorId(string id) =>
            await _usuarios.Find(usuario => usuario.Id == id).FirstOrDefaultAsync();

        public async Task<Usuario> BuscarPorEmail(string email) =>
            await _usuarios.Find(usuario => usuario.Email == email).FirstOrDefaultAsync();

        public async Task CriarUsuario(Usuario usuario) =>
            await _usuarios.InsertOneAsync(usuario);
    }
}
