-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Portfolio` DEFAULT CHARACTER SET utf8 ;
USE `Portfolio` ;

-- -----------------------------------------------------
-- Table `Portfolio`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`persona` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(50) NULL,
  `apellido` VARCHAR(50) NULL,
  `correo` VARCHAR(100) NULL,
  `profesion` VARCHAR(100) NULL,
  `domicilio` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`experiencia_laboral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`experiencia_laboral` (
  `id` INT NOT NULL,
  `nombreEmpresa` VARCHAR(45) NULL,
  `fechaInicio` VARCHAR(100) NULL,
  `fechaFin` VARCHAR(100) NULL,
  `descripcion` VARCHAR(200) NULL,
  `tipoEmpleo` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`educacion` (
  `id` INT NOT NULL,
  `instituto` VARCHAR(45) NULL,
  `titulo` VARCHAR(100) NULL,
  `periodo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`tecnologia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`tecnologia` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `nivel` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`usuario` (
  `id` INT ZEROFILL NOT NULL,
  `usuario` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `isEnabled` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`proyecto` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(100) NULL,
  `fecha` VARCHAR(45) NULL,
  `descripcion` VARCHAR(200) NULL,
  `link` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Portfolio`.`acerca_de`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Portfolio`.`acerca_de` (
  `id` INT NOT NULL,
  `descripcion` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
