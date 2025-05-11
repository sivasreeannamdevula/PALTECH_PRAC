using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PracMVC.Models;

namespace PracMVC.Controllers;

public class HomeController : Controller
{
    

    public IActionResult FormCreation()
    {
        return View();
    }
   

   
}
