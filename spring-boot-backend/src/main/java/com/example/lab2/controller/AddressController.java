package com.example.lab2.controller;

import com.example.lab2.aspect.annotation.ExecutionTime;
import com.example.lab2.dto.AddressDTO;
import com.example.lab2.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/address")
@CrossOrigin
public class AddressController {

    private final AddressService addressService;

    @GetMapping
    @ExecutionTime
    public List<AddressDTO> getAll(){
        return  addressService.getAll();
    }

    @PostMapping
    @ExecutionTime
    public void save(@RequestBody AddressDTO addressDTO){
        addressService.save(addressDTO);
    }

    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable int id){
        addressService.delete(id);
    }

    @PutMapping("/{id}")
    @ExecutionTime
    public void update(@PathVariable int id, @RequestBody AddressDTO addressDTO){
        addressService.update(id, addressDTO);
    }

    @GetMapping("/{id}")
    @ExecutionTime
    public AddressDTO getById(@PathVariable int id){
        return  addressService.getById(id);
    }
}
