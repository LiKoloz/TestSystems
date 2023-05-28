using Microsoft.AspNetCore.Mvc;
using TestSystem.Models;

namespace TestSystem.Controllers
{
    public class SpaceObjectController : Controller
    {
        [HttpGet("api/objects")]
        async public Task<IActionResult> GetAllPlanets()
        {
            ApplicationContext db = new ApplicationContext();
            if (db.objects != null)
            {
                return Json(db.objects);
            }
            return StatusCode(501);
        }

        [HttpGet("api/objects/{id}")]
        async public Task<IActionResult> GetObject(int id)
        {
            ApplicationContext db = new ApplicationContext();
            var req = db.objects.ToList().FirstOrDefault((s) => s.Id == id);
            if (req != null) { return Json(req); }
            return StatusCode(501);
        }

        [HttpGet("api/objects/page/{pageNum}")]
        async public Task<IActionResult> GetSystemRange(int pageNum)
        {
            ApplicationContext db = new ApplicationContext();
            var req = db.objects.ToList();
            var len = req.GetRange(6 * pageNum - 1, 6);
            if (len != null) { return Json(req); }
            return StatusCode(501);
        }

        [HttpDelete("api/objects/delete/{id}")]
        async public Task<IActionResult> DeleteSystem(int id)
        {
            ApplicationContext db = new ApplicationContext();
            var sObject = db.objects.FirstOrDefault(s => s.Id == id);
            if (sObject != null)
            {
                db.objects.Remove(sObject);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("api/addobject")]
        async public Task<IActionResult> AddSystem(SpaceObject newObject)
        {
            ApplicationContext db = new ApplicationContext();
            db.objects.Add(newObject);
            db.SaveChanges();
            return Ok();
        }

        [HttpPut("api/changeobject")]
        async public Task<IActionResult> ChangeSystem(SpaceObject newObject)
        {
            ApplicationContext db = new ApplicationContext();
            var s = db.objects.FirstOrDefault(s => s.Id == newObject.Id);
            if (s != null)
            {
                newObject.Id = s.Id;
                db.objects.Remove(s);
                db.objects.Add(newObject);
                db.SaveChanges();
                return Ok();
            }
            return StatusCode(501);
        }
    }
}
