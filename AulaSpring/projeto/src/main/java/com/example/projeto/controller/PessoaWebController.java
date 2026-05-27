package com.example.projeto.controller;

import com.example.projeto.model.Pessoa;
import com.example.projeto.service.PessoaService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/web/pessoas")
public class PessoaWebController {

    private final PessoaService pessoaService;

    public PessoaWebController(PessoaService pessoaService) {
        this.pessoaService = pessoaService;
    }

    @GetMapping
    public String listar(Model model) {
        model.addAttribute("pessoas", pessoaService.listarPessoas());
        return "pessoas/lista";
    }

    @GetMapping("/novo")
    public String formulario(Model model) {
        model.addAttribute("pessoa", new Pessoa());
        return "pessoas/form";
    }

    @PostMapping("/salvar")
    public String salvar(@ModelAttribute Pessoa pessoa) {
        pessoaService.salvarPessoa(pessoa);
        return "redirect:/web/pessoas";
    }

    @GetMapping("/editar/{id}")
    public String editar(@PathVariable Long id, Model model) {
        Pessoa pessoa = pessoaService.buscarPorId(id)
                .orElseThrow(() -> new IllegalArgumentException("ID inválido: " + id));
        model.addAttribute("pessoa", pessoa);
        return "pessoas/form";
    }

    @GetMapping("/detalhes/{id}")
    public String detalhes(@PathVariable Long id, Model model) {
        Pessoa pessoa = pessoaService.buscarPorId(id)
                .orElseThrow(() -> new IllegalArgumentException("ID inválido: " + id));
        model.addAttribute("pessoa", pessoa);
        return "pessoas/detalhe";
    }

    @GetMapping("/deletar/{id}")
    public String deletar(@PathVariable Long id) {
        pessoaService.deletarPessoa(id);
        return "redirect:/web/pessoas";
    }
}