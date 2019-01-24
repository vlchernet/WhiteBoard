using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using WhiteBoard.Hubs;

namespace WhiteBoard
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDistributedMemoryCache();
            services.AddSession();
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseSession();

            //app.Run(async (context) =>
            //{
            //    if (context.Session.Keys.Contains("canvas"))
            //    {
            //        Canvas canvas = context.Session.Get<Canvas>("canvas");
            //        //await context.Response.WriteAsync($"Hello {canvas.ImageData}!");
            //    }
            //    else
            //    {
            //        Canvas canvas = new Canvas { ImageData = "" }; // TODO ??
            //        context.Session.Set<Canvas>("canvas", canvas);
            //        //await context.Response.WriteAsync("Hello World!");
            //    }
            //});


            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseFileServer();

            app.UseSignalR(routes =>
            {
                routes.MapHub<DrawHub>("/draw");
            });
        }
    }
}
