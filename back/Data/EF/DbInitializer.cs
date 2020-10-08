using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace webMotors.Data.EF
{

    public class DbInitializer : DbContext
    {

        public static void Initialize(IServiceProvider serviceProvider)
        {

            var ctx = serviceProvider.GetRequiredService<DataContext>();

            ctx.Database.EnsureCreated();

        }

    }

}