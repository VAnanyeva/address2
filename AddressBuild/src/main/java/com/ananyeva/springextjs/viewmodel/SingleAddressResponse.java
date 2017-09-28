package com.ananyeva.springextjs.viewmodel;

import java.io.Serializable;

public class SingleAddressResponse implements Serializable {

	private boolean success;
    private Address address;

    public SingleAddressResponse(boolean success, Address address) {
        this.success = success;
        this.address = address;
    }

    public boolean isSuccess() {
        return success;
    }

    public Address getAddress() {
        return address;
    }
}

