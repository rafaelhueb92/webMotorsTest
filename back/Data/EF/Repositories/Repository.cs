using webMotors.Domain.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using webMotors.Domain.Entities;
using System.Threading.Tasks;

namespace webMotors.Data.EF.Repositories
{
    public class Repository<T> : IRepository<T>
        where T : Entity
    {

        private readonly DbContext _ctx;

        public Repository(DbContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<T> Add(T entity)
        {
            await _ctx.Set<T>().AddAsync(entity);
            await save();
            return entity;
        }

        public async Task Delete(T entity)
        {
            _ctx.Set<T>().Remove(entity);
            await save();
        }

        public async Task<T> Get(object pk)
        {
            return await _ctx.Set<T>().FindAsync(pk);
        }

        public async Task<IEnumerable<T>> Get()
        {
            return await _ctx.Set<T>()
                .AsNoTracking() //desativa o dynamic proxie
                .ToListAsync();
        }

        public async Task Update(T entity)
        {
            _ctx.Update(entity);
            await save();
        }

        public void Dispose()
        {
            _ctx.Dispose();
        }

        private async Task save()
        {
            await _ctx.SaveChangesAsync();
        }

    }
}