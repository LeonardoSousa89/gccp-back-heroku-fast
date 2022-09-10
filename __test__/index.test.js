require('dotenv').config()


describe('Should access the environment variable',()=>{
    it('env.HOST must be like this value=not_null',()=>{
        expect(process.env.DB_HOST).not.toBeNull()
    })
})

describe('Should access the environment variable',()=>{
    it('env.HOST must be like this value=undefined',()=>{
        expect(process.env.DB_HOST).not.toBe(undefined)
    })
})

describe('Should access the environment variable',()=>{
    it('env.DB_PORT must be like this value=5432',()=>{
        expect(process.env.DB_PORT.valueOf()).toBe('5432')
    })
})



