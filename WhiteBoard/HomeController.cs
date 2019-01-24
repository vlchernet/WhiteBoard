using Microsoft.AspNetCore.Mvc;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http;
using System.Web;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WhiteBoard
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public async System.Threading.Tasks.Task<IActionResult> UploadImageAsync(string imageData)
        {
            byte[] data = Convert.FromBase64String(imageData);
            Console.WriteLine(data.ToString());
            //await HttpContext.Session.LoadAsync();
            //Session["imageSession"] = data; //как правильно положить data в сессию?!
            return RedirectToAction("Apply");
        }
    }
}
