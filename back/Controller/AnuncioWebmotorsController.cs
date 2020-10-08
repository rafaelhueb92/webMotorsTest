using webMotors.Domain.Contracts;
using webMotors.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace webMotors.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AnuncioWebMotorsController : ControllerBase
    {

        private readonly ILogger _logger;

        private readonly IAnuncioWebMotorsRepository _AnuncioWebMotorsRepo;

        public AnuncioWebMotorsController(
            ILogger<eAnuncioWebMotors> logger,
            IAnuncioWebMotorsRepository AnuncioWebMotorsRepo)
        {
            _logger = logger;
            _AnuncioWebMotorsRepo = AnuncioWebMotorsRepo;
        }

        [HttpGet]
        public async Task<ActionResult<eAnuncioWebMotors>> Get()
        {
            try
            {
                var Anuncios = await _AnuncioWebMotorsRepo.Get();
                return Ok(Anuncios);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<eAnuncioWebMotors>> GetByID(int id)
        {
            try
            {
                var Anuncio = await _AnuncioWebMotorsRepo.Get(id);
                return Ok(Anuncio);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500);
            }
        }

        [HttpPost]
        public async Task<ActionResult<eAnuncioWebMotors>> Add([FromBody] eAnuncioWebMotors AnuncioWebMotors)
        {
            try
            {
                var Anuncio = await _AnuncioWebMotorsRepo.Add(AnuncioWebMotors);
                return Ok(Anuncio);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500);
            }
        }

        [HttpPut]
        public async Task<ActionResult<eAnuncioWebMotors>> Update([FromBody] eAnuncioWebMotors AnuncioWebMotors)
        {
            try
            {

                var AnuncioUpdt = await _AnuncioWebMotorsRepo.Get(AnuncioWebMotors.ID);

                if (AnuncioUpdt == null) return NotFound();

                AnuncioUpdt.Update(AnuncioWebMotors);

                await _AnuncioWebMotorsRepo.Update(AnuncioUpdt);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500);
            }
        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _AnuncioWebMotorsRepo.Delete(new eAnuncioWebMotors() { ID = id });
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500);
            }
        }

    }

}