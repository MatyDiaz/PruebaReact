import { expect, test, describe } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe('useItems hook', ()=>{
    test('shoul add and remove items', ()=> {
        const {result} = renderHook(() => useItems())
        
        expect(result.current.items.length).toBe(0)

        act(()=>{
            result.current.addItem('jugar al Diablo2');
            result.current.addItem('Salir a correr');
        })   

        expect(result.current.items.length).toBe(2)

        act(()=>{
            result.current.removeItem(result.current.items[0].id)
        })

        expect(result.current.items.length).toBe(1)
    })
})