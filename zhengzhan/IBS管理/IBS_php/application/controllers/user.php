<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {
	public function login()
	{
		// 1.从页面接收数据
		$username = $this->input->get("username");
		$password = $this->input->get("password");
		// 2.连接数据库
		$this->load->model("user_model");
		$query = $this->user_model->get_by_username_password($username, $password);
		if($query){
			echo json_encode($query);
		}
	}
	public function regist()
	{
		// 1.从页面接收数据
		$card = $this->input->get("card");
		$username = $this->input->get("username");
		$password = $this->input->get("password");
		$phone = $this->input->get("phone");
		$sex = $this->input->get("sex");
		$id = $this->input->get("id");
		$name = $this->input->get("name");
		$check_password = $this->input->get("check_password");
		// 2.把数据打成数组
		$arr = array(
			"card" => $card,
			"username" => $username,
			"password" => $password,
			"phone" => $phone,
			"sex" => $sex,
			"name" => $name,
			"id" => $id,
			"check_password" => $check_password
		);
		// 3.连接数据库
		$this->load->model("user_model");
		$result = $this->user_model->save($arr);
		if($result){
			echo "1";
		}else{
			echo "0";
		}
	}
	public function pay(){
		// 1.从页面接收数据
		$card = $this->input->get("card");
		$name = $this->input->get("name");
		$pay = $this->input->get("pay");
		$user_card = $this->input->get("user_card");
		// 2.连接数据库
		$this->load->model("user_model");
		// 这个钱是为了重置session
		$monney = $this->user_model->pay($card, $name, $pay, $user_card);
		echo $monney;
	}
	public function check_monney(){
		// 1.从页面接收数据
		$check_password = $this->input->get("check_password");
		// 2.连接数据库
		$this->load->model("user_model");
		$query = $this->user_model->check_monney($check_password);
		if($query){
			echo "1";
		}else{
			echo "0";
		}
	}
	public function details(){
		// 1.从页面接收数据
		$card = $this->input->get("card");
		// 2.连接数据库
		$this->load->model("user_model");
		$query = $this->user_model->details($card);
		echo json_encode($query);
	}
	public function show_money(){
		// 1.从页面接收数据
		$username = $this->input->get("username");
		// 2.连接数据库
		$this->load->model("user_model");
		$query = $this->user_model->show_money($username);
		echo json_encode($query);
	}
	public function index(){
		$this->load->view("index");
	}
}
