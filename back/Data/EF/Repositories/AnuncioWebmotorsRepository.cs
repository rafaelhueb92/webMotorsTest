using webMotors.Domain.Contracts;
using webMotors.Domain.Entities;

namespace webMotors.Data.EF.Repositories
{

    public class AnuncioWebmotorsRepository : Repository<eAnuncioWebMotors>, IAnuncioWebMotorsRepository  
    {

        public readonly DataContext _ctx;

        public AnuncioWebmotorsRepository(DataContext ctx) : base(ctx) { _ctx = ctx; }

    }

}