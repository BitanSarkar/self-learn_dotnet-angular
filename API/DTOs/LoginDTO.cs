using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class LoginDTO
    {
        [Required]
        [MinLength(3)]
        [MaxLength(10)]
        public string UserName {get; set;}

        [Required]
        [MinLength(8)]
        [MaxLength(10)]
        public string Password { get; set; }
    }
}