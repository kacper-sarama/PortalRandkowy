using System.ComponentModel.DataAnnotations;

namespace PortalRandkowy.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Nazwa użytkownika jest wymagana")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Hasło jest wymagane")]
        [MaxLength(12, ErrorMessage = "Hasło może mieć maksymalnie 12 znaków")]
        [MinLength(6, ErrorMessage = "Hasło powinno mieć conajmniej 6 znaków")]
        public string Password { get; set; }
    }
}