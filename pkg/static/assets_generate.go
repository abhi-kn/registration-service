// +build ignore

package main

import (
	"github.com/codeready-toolchain/registration-service/pkg/log"
	"github.com/codeready-toolchain/registration-service/pkg/static"

	"github.com/shurcooL/vfsgen"
)

func main() {
	err := vfsgen.Generate(static.Assets, vfsgen.Options{
		PackageName:  "static",
		BuildTags:    "!dev",
		VariableName: "Assets",
		Filename:     "pkg/static/generated_assets.go",
	})
	if err != nil {
		log.Error(nil, err, err.Error())
	}
}
