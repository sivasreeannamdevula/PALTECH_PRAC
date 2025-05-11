using Microsoft.AspNetCore.Mvc;

public class OutputController:Controller
{
    public IActionResult OutputMethod(string usernamename,string passwordname)
    {
        ViewData["usernamename"]=usernamename;
        ViewData["passwordname"]=passwordname;
        return View();
    }
}