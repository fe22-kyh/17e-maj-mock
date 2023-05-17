# 17e Maj 

## Live-kod

[Live coding examples](live-coding/)

## Material
- [Make your test fail, why it's necessary](https://kentcdodds.com/blog/make-your-test-fail)
- [Jest Snapshots, how they work](https://jestjs.io/docs/tutorial-react-native)
- [Async Jest](https://jestjs.io/docs/tutorial-async)
- [Making jest more useful, tips and tricks](https://dev.to/dvddpl/jest-testing-like-a-pro-tips-and-tricks-4o6f)

## Övningar
Gör övningen i par. Gör steg 1 och 2 självständigt och gör sedan 1 och 2 tillsammans (förfina, slå ihop resultaten) följt av steg 3 tillsammans. Levelup:en kan både göras enskilt och i par, men helst inte fler än 2 per grupp.

### Steg 1: User stories 
Skapa user stories för email service:n som du byggde i UX kursen. Utifrån user stories välj ut de som hanterar någon form av authentisering. 

### Steg 2: Tekniska krav
Översätt dessa user stories till tekniska krav som är mättbara, dvs. det ska tydligt framgå vad som krävs för att teknisk krav ska bara uppfyllt. Ett krav som "Det ska finnas en loginknapp" är inte lika tydlig som "När knappen 'login' trycks med giltigt användarnamn och lössenord så ska användaren omdirigeras till sin inkorg".

### Steg 3: Implementera tester
Implementera tester för de tekniska kraven som du har formulerat. Om ett teknisk krav inte går att översätta till ett test så behöver kravet förmodligen brytas ner i flera mindre krav.

Alla krav som beror av en extern källa bör använda jest metoden "mockReturnValue", se länken "making jest more useful, tips and tricks" under rubriken "mocks" för tips på hur metoden kan användas som ersättare för ett api anrop.

### Level up
Vilka tekniska krav kan resultera i olika typer av fel? Ex. att logga in kan resultera i att authentiserings servicen är nere eller att inloggningsuppgifterna är inkorrekta. Skriv sedan tester där mock return värdet från ett funktionsanrop som ger en felaktikg respons. Tips, se länken "Making jest more useful, tips and tricks" under rubriken "false positives, toThrow and expect.assertion".

