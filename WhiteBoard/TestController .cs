using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Web.Http;
using FromBodyAttribute = Microsoft.AspNetCore.Mvc.FromBodyAttribute;
//using FromBodyAttribute = System.Web.Http.FromBodyAttribute;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WhiteBoard
{
    public class TestController : ApiController
    {
        [AllowReferrer]
        public void Post([FromBody]string value)
        {
            if (value == null)
            {
                //throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            if (value.Length > 1000000)
            {
                //throw new HttpResponseException(HttpStatusCode.Forbidden);
            }
        }
    }

    internal class AllowReferrerAttribute : Attribute
    {
    }
}
