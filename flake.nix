# Based upon https://github.com/the-nix-way/dev-templates
{
  description = "Basic flake for FiveNet docs development";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=release-25.11";
  };

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ self.overlays.default ];
        };
      });
    in
    {
      overlays.default = final: prev: {};

      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          # Workaround CGO issue https://nixos.wiki/wiki/Go#Using_cgo_on_NixOS
          hardeningDisable = [ "fortify" ];

          packages = with pkgs; [
            # NodeJS stuff
            nodejs_22
            pnpm_10

            # Utilities
            ripgrep
            sd
            libwebp
          ];
        };
      });
    };

}
