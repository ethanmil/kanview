// +build mage

package main

import (
	magesh "github.com/magefile/mage/sh"
)

const (
	name   = "kanview"
	uiport = "4200"
)

func Serve() error {
	args := []string{
		"serve",
		"--proxy-config", "proxy.conf.json",
	}

	return magesh.RunV("ng", args...)
}
