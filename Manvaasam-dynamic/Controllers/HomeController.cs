using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Manvaasam_dynamic.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            return View();
        }

        public ActionResult gallery()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult aboutus()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Index()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Course()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult product()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult product_details()
        {
           
            return View();
        }
        public ActionResult product_details1()
        {

            return View();
        }
        public ActionResult product_details2()
        {

            return View();
        }
        public ActionResult product_details3()
        {

            return View();
        }
        public ActionResult product_details4()
        {

            return View();
        }
        public ActionResult product_details5()
        {

            return View();
        }
        public ActionResult product_details6()
        {

            return View();
        }
        public ActionResult product_details7()
        {

            return View();
        }
        public ActionResult product_details8()
        {

            return View();
        }


    }
}