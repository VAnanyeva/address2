package com.ananyeva.springextjs.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.ananyeva.springextjs.viewmodel.Address;
import com.ananyeva.springextjs.viewmodel.ManyAddressResponse;
import com.ananyeva.springextjs.viewmodel.SingleAddressResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Controller
public class AddressController {
	List<Address> addresses = new ArrayList<Address>();
	
    @RequestMapping(value="/addresses/{addressId}", method= RequestMethod.GET, produces=APPLICATION_JSON_VALUE)
    @ResponseBody
    public SingleAddressResponse getFact(@PathVariable Long addressId) throws IOException {
        System.out.println("Address retrieved.");
        return new SingleAddressResponse(true,new Address(1L,"Wika","Pika","v-ananyeva@mail.ru"));
    }

    @RequestMapping(value="/addresses", method= RequestMethod.GET, produces=APPLICATION_JSON_VALUE)
    @ResponseBody
    public ManyAddressResponse getFacts() throws IOException {
        System.out.println("Address search.");
        addresses.add(new Address(1L, "Liza","Simpsons","lisa@simpsons.com"));
        addresses.add(new Address(2L, "Bart","Simpsons","bart@simpsons.com"));
        addresses.add(new Address(3L, "Homer","Simpsons","homer@simpsons.com"));
        addresses.add(new Address(4L, "Marge","Simpsons","marge@simpsons.com"));
        return new ManyAddressResponse(true,addresses);
    }

    @RequestMapping(value="/addresses", method= RequestMethod.POST, produces=APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    @ResponseBody
    public SingleAddressResponse createAddress(@RequestBody Address address) throws IOException {
        System.out.println("Address created.");
        return new SingleAddressResponse(true,address);
    }

    @RequestMapping(value="/addresses/{addressId}", method= RequestMethod.PUT, produces=APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    @ResponseBody
    public SingleAddressResponse updateAddress(@PathVariable Long addressId, @RequestBody Address address) throws IOException {
        System.out.println("Address updated. id = "  + addressId);
        return new SingleAddressResponse(true,new Address(addressId,address.getFirst(),address.getLast(),address.getEmail()));
    }

    @RequestMapping(value="/addresses/{addressId}", method= RequestMethod.DELETE, produces=APPLICATION_JSON_VALUE    )
    @ResponseBody
    public SingleAddressResponse deleteAddress(@PathVariable Long addressId) throws IOException {
        System.out.println("Address deleted.");
        return new SingleAddressResponse(true,new Address(addressId,null,null,null));
    }
}