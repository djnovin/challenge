using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        private const string MediaFolder = "media";

        public UploadController(IWebHostEnvironment env)
        {
            _env = env;
        }

        [HttpPost]
        [RequestSizeLimit(300 * 1024 * 1024)]
        public async Task<IActionResult> UploadFiles([FromForm] IFormFile[] files)
        {
            var mediaPath = Path.Combine(_env.WebRootPath, MediaFolder);

            if (!Directory.Exists(mediaPath))
            {
                Directory.CreateDirectory(mediaPath);
            }

            foreach (var file in files)
            {
                if (file.Length > 0 && file.ContentType == "video/mp4")
                {
                    var filePath = Path.Combine(mediaPath, file.FileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }
                }
                else
                {
                    return BadRequest("Only MP4 files are allowed.");
                }
            }

            return Ok();
        }
    }
}
