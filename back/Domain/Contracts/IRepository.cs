using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using webMotors.Domain.Entities;

namespace webMotors.Domain.Contracts
{
    public interface IRepository<T> : IDisposable
       where T : Entity
    {

        Task<T> Add(T entity);

        Task Update(T entity);

        Task Delete(T entity);

        Task<T> Get(object pk);

        Task<IEnumerable<T>> Get();

    }
}