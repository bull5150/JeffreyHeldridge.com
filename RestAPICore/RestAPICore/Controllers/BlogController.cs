using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestAPICore.Models;
using RestAPICore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly BlogService _blogService;

        public BlogController(BlogService blogService)
        {
            _blogService = blogService;
        }

        [HttpGet]
        public ActionResult<List<BlogModel>> Get() =>
            _blogService.Get();

        [HttpGet("{id:length(24)}", Name = "GetBlog")]
        public ActionResult<BlogModel> Get(string id)
        {
            var blog = _blogService.Get(id);

            if (blog == null)
            {
                return NotFound();
            }

            return blog;
        }

        [HttpPost]
        public ActionResult<BlogModel> Create(BlogModel blog)
        {
            _blogService.Create(blog);

            return CreatedAtRoute("GetBlog", new { id = blog.Id.ToString() }, blog);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, BlogModel blogIn)
        {
            var blog = _blogService.Get(id);

            if (blog == null)
            {
                return NotFound();
            }

            _blogService.Update(id, blogIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var blog = _blogService.Get(id);

            if (blog == null)
            {
                return NotFound();
            }

            _blogService.Remove(blog.Id);

            return NoContent();
        }
    }
}
