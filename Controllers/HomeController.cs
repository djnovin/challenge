using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.IO;
using System.Linq;

namespace backend.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IWebHostEnvironment _env;
    private const string MediaFolder = "media";

    public HomeController(ILogger<HomeController> logger, IWebHostEnvironment env)
    {
        _logger = logger;
        _env = env;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Catalogue()
    {
        var mediaPath = Path.Combine(_env.WebRootPath, MediaFolder);
        var files = Directory.Exists(mediaPath)
            ? Directory.GetFiles(mediaPath).Select(f => new FileInfo(f)).ToList()
            : new List<FileInfo>();

        return View(files);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
