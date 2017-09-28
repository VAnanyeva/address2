package com.ananyeva.springextjs.viewmodel;

import java.io.Serializable;
import java.util.List;


public class ManyAddressResponse implements Serializable {

	private boolean success;
    private List<Address> addresses;
 
    public ManyAddressResponse(boolean success, List<Address> addresses) {
        this.success = success;
        this.addresses = addresses;
    }

    public boolean isSuccess() {
        return success;
    }

    public List<Address> getAddresses() {
        return addresses;
    }
}
