using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace RestAPICore.Models
{
    public class BlogModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string createDate { get; set; }
        public string thumbImageURL { get; set; }
        public string mainImageURL { get; set; }
        public string blogEntry { get; set; }

    }
}
