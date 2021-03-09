using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeProblems_CandJavascript.Controllers
{
    public class Interface : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult JavascriptProblems()
        {
            return View();
        }

    }
}
