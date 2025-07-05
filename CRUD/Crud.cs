// Controllers/ProdutosController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")] 

public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProdutosController(AppDbContext context)
    {
        _context = context;
    }

    // --- C (Create): Criar um novo produto ---
    // POST: api/Produtos
    [HttpPost]
    public async Task<ActionResult<Produto>> PostProduto(Produto produto)
    {
        _context.Produtos.Add(produto);
        await _context.SaveChangesAsync(); // Salva as mudanças no banco de dados

        return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
    }

    // --- R (Read): Obter produtos ---
    // GET: api/Produtos
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
    {
        return await _context.Produtos.ToListAsync(); // Retorna todos os produtos
    }

    // GET: api/Produtos/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Produto>> GetProduto(int id)
    {
        var produto = await _context.Produtos.FindAsync(id); // Encontra um produto pelo Id

        if (produto == null)
        {
            return NotFound(); // Retorna 404 se não encontrado
        }

        return produto;
    }

    // --- U (Update): Atualizar um produto ---
    // PUT: api/Produtos/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProduto(int id, Produto produto)
    {
        if (id != produto.Id)
        {
            return BadRequest(); // IDs não correspondem
        }

        _context.Entry(produto).State = EntityState.Modified; // Marca o produto como modificado

        try
        {
            await _context.SaveChangesAsync(); // Salva as mudanças
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProdutoExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent(); // Retorna 204 (Sucesso, sem conteúdo)
    }

    // --- D (Delete): Deletar um produto ---
    // DELETE: api/Produtos/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduto(int id)
    {
        var produto = await _context.Produtos.FindAsync(id);
        if (produto == null)
        {
            return NotFound();
        }

        _context.Produtos.Remove(produto); // Remove o produto
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ProdutoExists(int id)
    {
        return _context.Produtos.Any(e => e.Id == id);
    }
}