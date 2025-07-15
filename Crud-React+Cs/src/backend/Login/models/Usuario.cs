using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LoginMongoAPI.Models
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("email")]
        public string Email { get; set; } = string.Empty;

        [BsonElement("senha")]
        public string Senha { get; set; } = string.Empty;
    }
}
