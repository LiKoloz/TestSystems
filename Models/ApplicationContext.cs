using Microsoft.EntityFrameworkCore;

namespace TestSystem.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<SpaceSystem> systems { get; set; } = null!;
        public DbSet<SpaceObject> objects { get; set; } = null!;

        public ApplicationContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5500;Database=spacedb;Username=postgres;Password=SomePassword123");
        }
    }
}
