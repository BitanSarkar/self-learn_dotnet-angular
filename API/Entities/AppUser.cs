using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        [JsonIgnore]
        public byte[] PasswordHash {get; set;}

        [JsonIgnore]
        public byte[] PasswordSalt { get; set; }
    }
}