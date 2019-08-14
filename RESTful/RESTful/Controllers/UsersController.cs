using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RESTful.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RESTful.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        UsersContext db;
        public UsersController(UsersContext context)
        {
            this.db = context;
            if (!db.Users.Any())
            {
                db.Users.Add(new User { Name = "Asaf", Birthday = new DateTime(1996, 6, 6), Sex = "Male", FamilyStatus = "Single" });
                db.Users.Add(new User { Name = "Alice", Birthday = new DateTime(2000, 4, 12), Sex = "Female", FamilyStatus = "Single" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.Users.ToList();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            User user = db.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
                return NotFound();
            return new ObjectResult(user);
        }

        // POST api/users
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            db.Users.Add(user);
            db.SaveChanges();
            return Ok(user);
        }

        // PUT api/users/
        [HttpPut]
        public IActionResult Put([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            if (!db.Users.Any(x => x.Id == user.Id))
            {
                return NotFound();
            }

            db.Update(user);
            db.SaveChanges();
            return Ok(user);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User user = db.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            db.Users.Remove(user);
            db.SaveChanges();
            return Ok(user);
        }
    }
}


