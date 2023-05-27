using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestSystem.Models;

namespace TestSystem.Controllers
{
    [ApiController]
    public class SpaceSystemController : Controller
    {
        [HttpGet("api/systems")]
        async public Task<IActionResult> GetAllSystems()
        {
            ApplicationContext db = new ApplicationContext();
            if(db.systems != null)
            {
                return Json(db.systems);
            }
            return StatusCode(501);
        }

        [HttpGet("api/systems/{id}")]
        async public Task<IActionResult> GetSystem(int id)
        {
            ApplicationContext db = new ApplicationContext();
            var req = db.systems.ToList().FirstOrDefault((s)=>s.Id==id);
            if(req != null) { return Json(req); }
            return StatusCode(501);
        }

        [HttpGet("api/systems/page/{pageNum}")]
        async public Task<IActionResult> GetSystemRange(int pageNum)
        {
            ApplicationContext db = new ApplicationContext();
            var req = db.systems.ToList();
            var len = req.GetRange(6*pageNum-1, 6);
            if (len != null) { return Json(req); }
            return StatusCode(501);
        }

        [HttpDelete("api/systems/delete/{id}")]
        async public Task<IActionResult> DeleteSystem(int id)
        {
            ApplicationContext db = new ApplicationContext();
            var system = db.systems.FirstOrDefault(s => s.Id == id);
            if (system != null)
            {
                db.systems.Remove(system);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("/api/addsystem")]
        async public Task<IActionResult> AddSystem(SpaceSystem newSystem)
        {
            ApplicationContext db = new ApplicationContext();
            db.systems.Add(newSystem);
            db.SaveChanges();
            return Ok();
        }

        [HttpPut("/api/addsystem")]
        async public Task<IActionResult> ChangeSystem(SpaceSystem newSystem)
        {
            ApplicationContext db = new ApplicationContext();
            var s = db.systems.FirstOrDefault(s => s.Id == newSystem.Id);
            if (s != null)
            {
                newSystem.Id = s.Id;
                db.systems.Remove(s);
                db.systems.Add(newSystem);
                db.SaveChanges();
                return Ok();
            }
            return StatusCode(501);
        }
    }
}
