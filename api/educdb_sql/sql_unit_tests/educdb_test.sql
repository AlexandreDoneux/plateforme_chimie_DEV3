-- MySQL Script generated by MySQL Workbench
-- Fri Mar 25 21:33:17 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema educdb_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema educdb_test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `educdb_test` DEFAULT CHARACTER SET utf8 ;
USE `educdb_test` ;

-- -----------------------------------------------------
-- Table `educdb_test`.`utilisateurs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`utilisateurs` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`utilisateurs` (
  `idUtilisateur` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `prenom` VARCHAR(45) NOT NULL,
  `statut` VARCHAR(45) NOT NULL DEFAULT 'attente',
  `groupe` VARCHAR(45) NULL DEFAULT NULL,
  `classe` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `motDePasse` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idUtilisateur`),
  UNIQUE (email))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educdb_test`.`cours`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`cours` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`cours` (
  `idCours` INT NOT NULL AUTO_INCREMENT,
  `responsable` INT NOT NULL,
  `nom` VARCHAR(45) NOT NULL,
  `dateCreation` DATE NULL,
  `code_acces` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCours`),
  CONSTRAINT `fk_utilisateurs_cours`
    FOREIGN KEY (`responsable`)
    REFERENCES `educdb_test`.`utilisateurs` (`idUtilisateur`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `educdb_test`.`acces-cours`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`acces_cours` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`acces_cours` (
  `idUtilisateur` INT NOT NULL,
  `idCours` INT NOT NULL,
  `accepte` TINYINT NOT NULL DEFAULT 0,
  `date_demande` DATE NULL DEFAULT NULL,

  PRIMARY KEY (`idUtilisateur`, `idCours`),
  CONSTRAINT `fk_utilisateurs_has_cours_utilisateurs`
    FOREIGN KEY (`idUtilisateur`)
    REFERENCES `educdb_test`.`utilisateurs` (`idUtilisateur`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_utilisateurs_has_cours_cours1`
    FOREIGN KEY (`idCours`)
    REFERENCES `educdb_test`.`cours` (`idCours`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educdb_test`.`chapitre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`chapitre` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`chapitre` (
  `idChapitre` INT NOT NULL AUTO_INCREMENT,
  `titreChapitre` VARCHAR(45) NOT NULL,
  `estVisible` TINYINT NOT NULL DEFAULT 0,
  `idCours` INT NOT NULL,
  PRIMARY KEY (`idChapitre`),
  CONSTRAINT `fk_cours_chapitres`
    FOREIGN KEY (`idCours`)
    REFERENCES `educdb_test`.`cours` (`idCours`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educdb_test`.`quiz`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`quiz` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`quiz` (
  `idQuiz` INT NOT NULL AUTO_INCREMENT,
  `titre` VARCHAR(45) NOT NULL,
  `description` VARCHAR(300) NULL DEFAULT 'Pas de description',
  `estVisible` TINYINT NOT NULL DEFAULT 0,
  `idChapitre` INT NOT NULL,
  PRIMARY KEY (`idQuiz`),
  CONSTRAINT `fk_chapitre_quizs`
    FOREIGN KEY (`idChapitre`)
    REFERENCES `educdb_test`.`chapitre` (`idChapitre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `educdb_test`.`questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`questions` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`questions` (
  `idQuestions` INT NOT NULL AUTO_INCREMENT,
  `titre` VARCHAR(45) NOT NULL,
  `enonce` VARCHAR(300) NULL DEFAULT "Pas d'énonce",
  `estQCM` TINYINT NOT NULL DEFAULT 0,
  `points` FLOAT NOT NULL DEFAULT 0,
  `img` BLOB NULL,
  `idQuiz` INT NOT NULL,
  PRIMARY KEY (`idQuestions`),
  CONSTRAINT `fk_quizs_questions`
    FOREIGN KEY (`idQuiz`)
    REFERENCES `educdb_test`.`quiz` (`idQuiz`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `educdb_test`.`reponses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`reponses` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`reponses` (
  `idReponse` INT NOT NULL AUTO_INCREMENT,
  `texteResponse` VARCHAR(300) NULL,
  `imgReponse` BLOB NULL,
  `estCorrecte` TINYINT NOT NULL DEFAULT 0,
  `idQuestions` INT NOT NULL,
  PRIMARY KEY (`idReponse`),
  CONSTRAINT `fk_questions_reponses`
    FOREIGN KEY (`idQuestions`)
    REFERENCES `educdb_test`.`questions` (`idQuestions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `educdb_test`.`scores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `educdb_test`.`scores` ;

CREATE TABLE IF NOT EXISTS `educdb_test`.`scores` (
  `idScores` INT NOT NULL,
  `idUtilisateurs` INT NOT NULL,
  `idQuizs` INT NOT NULL,
  `resultat` FLOAT NOT NULL DEFAULT 0,
  `total` FLOAT NOT NULL,
  `date_score` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`idScores`, `idUtilisateurs`, `idQuizs`),
  CONSTRAINT `fk_utilisateurs_scores`
    FOREIGN KEY (`idUtilisateurs`)
    REFERENCES `educdb_test`.`utilisateurs` (`idUtilisateur`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_quizs_scores`
    FOREIGN KEY (`idQuizs`)
    REFERENCES `educdb_test`.`quiz` (`idQuiz`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tout les index
-- -----------------------------------------------------
CREATE INDEX `fk_idUtilisateur_idx` ON `educdb_test`.`cours` (`responsable` ASC) VISIBLE;
CREATE INDEX `fk_utilisateurs_has_cours_cours1_idx` ON `educdb_test`.`acces_cours` (`idCours` ASC) VISIBLE;
CREATE INDEX `fk_utilisateurs_has_cours_utilisateurs_idx` ON `educdb_test`.`acces_cours` (`idUtilisateur` ASC) VISIBLE;
CREATE INDEX `fk_idChapitre_idx` ON `educdb_test`.`quiz` (`idChapitre` ASC) VISIBLE;
CREATE INDEX `fk_idQuizs_idx` ON `educdb_test`.`questions` (`idQuiz` ASC) VISIBLE;
CREATE INDEX `fk_idQuestions_idx` ON `educdb_test`.`reponses` (`idQuestions` ASC) VISIBLE;
CREATE INDEX `fk_idUtilisateurs_idx` ON `educdb_test`.`scores` (`idUtilisateurs` ASC) VISIBLE;
CREATE INDEX `fk_idQuizs_score_idx` ON `educdb_test`.`scores` (`idQuizs` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
