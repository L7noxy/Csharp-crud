using LoginMongoAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LoginMongoAPI.Services
{
    public class UsuarioService
    {
        private readonly IMongoCollection<Usuario> _usuarios;

        public UsuarioService(IConfiguration configuration)
        {
            var client = new MongoClient(configuration["MongoDBSettings:ConnectionString"]);
            var database = client.GetDatabase(configuration["MongoDBSettings:DatabaseName"]);
            _usuarios = database.GetCollection<Usuario>(configuration["MongoDBSettings:CollectionName"]);
        }

        public Usuario? ValidarLogin(string email, string senha)
        {
            return _usuarios.Find(u => u.Email == email && u.Senha == senha).FirstOrDefault();
        }

        // (opcional) método para registrar usuário
        public void CriarUsuario(Usuario usuario)
        {
            _usuarios.InsertOne(usuario);
        }
    }
}
