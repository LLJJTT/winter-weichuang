<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {
	public function get_by_username_password($username, $password)
	{
		$sql = "select * from t_user where username='$username' and password='$password'";
		$query = $this->db->query($sql);
		return $query->row();
	}
	public function save($arr){
		$query = $this->db->insert("t_user", $arr);
		return $query;
	}
	public function pay($card, $name, $pay, $user_card){
		$query = $this->db->query("select * from t_user where card='$card' and name='$name'")->row();
		if($query){
			// 改被转账的人的monney
			$monney1 = $query->monney;
			$now_monney1 = $pay + $monney1;
			$query1 = $this->db->query("update t_user set monney = '$now_monney1' where card='$card'");
			$this->db->query("insert into t_details(card,pay,balance,money) values('$card','收入','$now_monney1','+$pay')");
			// 改转账人的monney
			$monney2 = $this->db->query("select * from t_user where card='$user_card'")->row()->monney;
			$now_monney2 = $monney2 - $pay;
			$query2 = $this->db->query("update t_user set monney = '$now_monney2' where card='$user_card'");
			$this->db->query("insert into t_details(card,pay,balance,money) values('$user_card','支出','$now_monney2','-$pay')");
			return $now_monney2;
		}else{
			return "0";
		}
	}
	public function check_monney($check_monney){
		$sql = "select * from t_user where check_password='$check_monney'";
		$query = $this->db->query($sql);
		return $query->row();
	}
	public function details($card){
		$sql = "select * from t_details where card='$card'";
		$query = $this->db->query($sql);
		return $query->result();
	}
	public function show_money($username){
		$sql = "select * from t_user where username='$username'";
		$query = $this->db->query($sql);
		return $query->row();
	}
}
