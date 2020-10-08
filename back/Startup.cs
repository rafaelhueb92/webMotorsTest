using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using webMotors.Data.EF;
using webMotors.Data.EF.Repositories;
using webMotors.Domain.Contracts;

namespace webMotorsEntrevista
{
    public class Startup
    {

        readonly string habilitarCORS = "frontAnuncios";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
     {
         builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
     }));

            services.AddControllers();

            var cn = Configuration.GetConnectionString("ApiConnection");

            services.AddDbContext<DataContext>(options =>
                 options.UseMySQL(cn));

            Injection(services);

            var InfoSwagger = new Microsoft.OpenApi.Models.OpenApiInfo
            {
                Version = "v1",
                Title = "Anúncios WebMotors",
                Description = "API do teste de admissão para a WebMotors",
                Contact = new OpenApiContact()
                {
                    Name = "Rafael Hueb",
                    Email = "rafaelhueb92@gmail.com",
                    Url = new Uri("http://rafaelhueb.com.s3-website-sa-east-1.amazonaws.com/")
                }
            };

            services.AddSwaggerGen(c =>
               {
                   c.SwaggerDoc("v1", InfoSwagger);
               });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebMotors Anúncios");
            });


        }

        public void Injection(IServiceCollection services)
        {

            services.AddScoped(typeof(IAnuncioWebMotorsRepository), typeof(AnuncioWebmotorsRepository));

        }

    }
}
