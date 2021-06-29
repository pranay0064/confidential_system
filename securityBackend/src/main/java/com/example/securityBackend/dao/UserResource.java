package com.example.securityBackend.dao;

import com.example.securityBackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class UserResource {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    @CrossOrigin("http://localhost:4200")
    public List<User> getDoctors(){
        return(List<User>) userRepository.findAll();

    }





    @PostMapping("/loginUser")
    @CrossOrigin("http://localhost:4200")
    public Integer checkDoctor(@RequestBody User user){

        List<User> u = (    List<User>) userRepository.findAll();
        for(User other : u)
        {
            if(  other.getEmailid().equals(user.getEmailid()) && other.getPassword().equals(user.getPassword()) ) {
                return other.getUid();
            }
        }
        return  -1;
    }

    @PostMapping("/putusers")
    @CrossOrigin("http://localhost:4200")
    public ResponseEntity<Object> createStudent(@RequestBody User user) {
        System.out.println(user);
        User savedUser = userRepository.save(user);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedUser.getUid()).toUri();

        return ResponseEntity.created(location).build();

    }


    @GetMapping("/users/{id}")
    @CrossOrigin("http://localhost:4200")
    public User retrieveStudent(@PathVariable Integer id) throws UserNotFoundException {
        Optional<User> student = userRepository.findById(id);

        if (!student.isPresent())
            throw new UserNotFoundException();

        return student.get();
    }

}
