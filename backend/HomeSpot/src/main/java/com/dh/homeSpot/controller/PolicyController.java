package com.dh.homeSpot.controller;

import com.dh.homeSpot.model.dto.PolicyDTO;
import com.dh.homeSpot.service.impl.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/policy")

public class PolicyController {

    @Autowired
    PolicyService policyService;

    @PostMapping
    public ResponseEntity<?> policiesRegister(@RequestBody PolicyDTO policyDTO){
        policyService.create(policyDTO);

        return ResponseEntity.ok(HttpStatus.CREATED);

    }

    @PutMapping
    public ResponseEntity<?> policiesUpdate(@RequestBody PolicyDTO policyDTO) {
        policyService.update(policyDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Set<PolicyDTO>> findPolicies(){

        return ResponseEntity.ok(policyService.findAll());

    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findPoliciesById(@PathVariable("id") Integer id) {
        PolicyDTO policyDTO = policyService.findById(id);
        return ResponseEntity.ok(policyDTO);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> policiesDelete(@PathVariable("id") Integer id) {
        policyService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}