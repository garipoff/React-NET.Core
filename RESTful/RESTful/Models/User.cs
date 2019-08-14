using System;
namespace RESTful.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string Sex { get; set; }
        public string FamilyStatus { get; set; }
    }
}
