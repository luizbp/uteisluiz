echo off
set /p nomeVar=Digite o nome do Projeto:
set /p ticketVar=Digite o nome do ticket:
mkdir "%nomeVar% - %ticketVar%"
mkdir "%nomeVar% - %ticketVar%"/"Backup de Objetos" 
mkdir "%nomeVar% - %ticketVar%"/"Objetos Alterados"
mkdir "%nomeVar% - %ticketVar%"/"Objetos Alterados"/"UNIFICADOS" 
mkdir "%nomeVar% - %ticketVar%"/"Objetos Criados" 
mkdir "%nomeVar% - %ticketVar%"/"Objetos Criados"/"UNIFICADOS" 
dir > "%nomeVar% - %ticketVar%"/Auxiliar.txt
@echo Estrutura criada com sucesso
