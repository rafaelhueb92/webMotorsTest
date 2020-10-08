using webMotors.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace webMotors.Data.EF
{
    public class DataContext : DbContext
    {

        private readonly IConfiguration _config;

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<eAnuncioWebMotors> AnuncioWebMotors { get; set; }
    }
}