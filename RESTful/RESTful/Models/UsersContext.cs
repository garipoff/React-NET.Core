﻿using Microsoft.EntityFrameworkCore;
namespace RESTful.Models
{
    public class UsersContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public UsersContext(DbContextOptions<UsersContext> options)
            : base(options)
        { }
    }
}
