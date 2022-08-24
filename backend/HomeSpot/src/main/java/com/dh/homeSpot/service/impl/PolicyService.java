package com.dh.homeSpot.service.impl;

import com.dh.homeSpot.model.dto.PolicyDTO;
import com.dh.homeSpot.model.entities.Policy;
import com.dh.homeSpot.repository.IPolicyRepository;
import com.dh.homeSpot.service.IPolicyService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.awt.desktop.OpenFilesEvent;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PolicyService implements IPolicyService {

    @Autowired
    private IPolicyRepository policyRepository;
    @Autowired
    ObjectMapper objectMapper;


    @Override
    public PolicyDTO findById(Integer id) {
        Optional<Policy> policies = policyRepository.findById(id);
        PolicyDTO policyDTO = null;
        if (policies.isPresent())
            policyDTO = objectMapper.convertValue(policies, PolicyDTO.class);
        return policyDTO;
    }

    @Override
    public PolicyDTO create(PolicyDTO policyDTO) {
        Policy policy = objectMapper.convertValue(policyDTO, Policy.class);
        PolicyDTO returnDTO = objectMapper.convertValue(policyRepository.save(policy), PolicyDTO.class);
        return returnDTO;
    }

    @Override
    public void deleteById(Integer id) {
        policyRepository.deleteById(id);

    }

    @Override
    public PolicyDTO update(PolicyDTO policyDTO) {
       Policy policy = objectMapper.convertValue(policyDTO, Policy.class);
       policyRepository.save(policy);
       return policyDTO;
    }

    @Override
    public Set<PolicyDTO> findAll() {
        List<Policy> policies = policyRepository.findAll();
        Set<PolicyDTO> policyDTO = new HashSet<>();
        for (Policy policy : policies) {
            policyDTO.add(objectMapper.convertValue(policy, PolicyDTO.class));
        }
        return policyDTO;
    }

}
