using System;
using System.Runtime.InteropServices.JavaScript;
using System.Collections.Generic;

Console.WriteLine("dotnet wasm bindings were loaded, successfully!");

public partial class Math
{
    [JSExport]
    internal static int[] FindMultiplesOf(int x) {
        var multiples = new List<int>();
        
        for (int i = 2; i <= (x / 2); i++) {
            if (x % i == 0) {
                multiples.Add(i);
            }
        }

        return multiples.ToArray();
    } 
}
